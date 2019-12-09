class Api::V1::DaysController < ApplicationController
    def index
        @days = Day.all
    end

    def show
        @day = Day.find(day_params[:id])
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
        params.require(:day).permit(:id, :date)
    end

end