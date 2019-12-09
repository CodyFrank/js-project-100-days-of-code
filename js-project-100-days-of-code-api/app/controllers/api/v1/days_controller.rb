class Api::V1::DaysController < ApplicationController
    def index
        @days = Day.all
        render json: DaySerializer.new(@days)
    end

    def show
        @day = Day.find(day_params[:id])
        render json: DaySerializer.new(@day)
    end

    def create
        @day = Day.new(day_params)
        if @day.save
            render json: DaySerializer.new(@day)
        else
            #throw some error here
        end
    end

    def update
        @day = Day.find(day_params[:id])
        if @day.update(day_params)
            render json: DaySerializer.new(@day)
        else
            #throw some error here
        end
    end

    def destroy
        @day = Day.find(day_params[:id]).destroy
        render json: {dayId: @day.id}
    end

    private

    def day_params
        params.require(:day).permit(:id, :date)
    end

end
