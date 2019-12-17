class Api::V1::DaysController < ApplicationController
    def index
        days = Day.all
        render json: days
    end

    def show
        if day = Day.find_by(id: params[:id])
            render json: day
        else
            render json: {message: "Cannot find a Day with that ID"}
        end
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
        day = Day.find_by(id: params[:id])
        if day.update(params)
            render json: day
        else
            render json: {message: "Cannot update that Day"}
        end
    end

    def destroy
        if day = Day.find_by(id: params[:id]).destroy
            render json: {dayId: day.id}
        else
            render json: {message: "Cannot delete that Day"}
        end
    end


end
