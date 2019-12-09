class Api::V1::DaysController < ApplicationController
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

    def day_params
        params.require(:day).permit(:date)
    end

end
