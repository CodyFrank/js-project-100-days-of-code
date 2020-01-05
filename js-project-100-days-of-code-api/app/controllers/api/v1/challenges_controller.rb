class Api::V1::ChallengesController < ApplicationController

    def create
        challenge = Challenge.new(challenge_params)
        if challenge.save
            render json: ChallengeSerializer.new(challenge).to_serialized_json
        else
            render json: {message: "Creating that challenge failed"}
        end
    end

    def update
    end

    def destroy
    end

    private

    def challenge_params
        params.require(:challenge).permit(:question, :solution, :description)
    end

end
