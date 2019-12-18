class Api::V1::DaysController < ApplicationController
    def index
        days = Day.all
        render json: days, only: [:id, :date]
    end

    def show
        if day = Day.find_by(id: params[:id])
            render json: day.to_json(:include => {:challenges => {:except => excluded_options}}, :except => excluded_options)
        else
            render json: {message: "Cannot find a Day with that ID"}
        end
    end

    def create
        day = Day.new(day_params)
        if day.save
            render json: day, only: [:id, :date]
        else
            render json: {message: "Creating that day failed"}
        end
    end

    def update
        day = Day.find_by(id: params[:id])
        if day.update(day_params)
            render json: day, only: [:id, :date]
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

    private

    def day_params
        params.require(:days).permit(:id, :date)
    end

    def excluded_options
        [:created_at, :updated_at]
    end


end
