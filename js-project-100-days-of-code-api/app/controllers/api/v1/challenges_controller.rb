class Api::V1::ChallengesController < ApplicationController

    def create
        challenge = Challenge.new(challenge_params)
        if challenge.save
            render json: ChallengeSerializer.new(challenge).to_serialized_json
        else
            render json: {message: "Creating that Challenge failed"}
        end
    end

    def update
        challenge = Challenge.find_by(id: params[:id])
        if challenge.update(challenge_params)
            render json: ChallengeSerializer.new(challenge).to_serialized_json
        else
            render json: {message: "Cannot update that Challenge"}
        end
    end

    def destroy
        if challenge = Challenge.find_by(id: params[:id]).destroy
            render json: {challengeId: challenge.id}
        else
            render json: {message: "Cannot delete that Day"}
        end
    end

    private

    def challenge_params
        params.require(:challenge).permit(:question, :solution, :description, :day_id, :rating)
    end

end
