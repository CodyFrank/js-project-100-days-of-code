class Api::V1::ChallengesController < ApplicationController
    def index
    end

    def show
    end

    def new
    end

    def create
    end

    def edit
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
