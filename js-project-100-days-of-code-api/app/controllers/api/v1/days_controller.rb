class Api::V1::DaysController < ApplicationController
    def index
        days = Day.all
        render json: days
    end

    def show
        day = Day.find(params[:id])
        render json: day
    end

    def create
        day = Day.new(params)
        if day.save
            render json: day
        else
            render json: {message: "Creating that day failed"}
        end
    end

    def update
        day = Day.find(params[:id])
        if day.update(params)
            render json: day
        else
            render json: {message: "Cannot update that Day"}
        end
    end

    def destroy
        if day = Day.find(params[:id]).destroy
            render json: {dayId: day.id}
        else
            render json: {message: "Cannot delete that Day"}
        end
    end

    private

end
