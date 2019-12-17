class Api::V1::DaysController < ApplicationController
    def index
        @days = Day.all
        render json: DaySerializer.new(@days, options)
    end

    def show
        @day = Day.find(params[:id])
        render json: DaySerializer.new(@day, options)
    end

    def create
        @day = Day.new(params)
        if @day.save
            render json: DaySerializer.new(@day, options)
        else
            #throw some error here
        end
    end

    def update
        @day = Day.find(params[:id])
        if @day.update(params)
            render json: DaySerializer.new(@day, options)
        else
            #throw some error here
        end
    end

    def destroy
        @day = Day.find(params[:id]).destroy
        render json: {dayId: @day.id}
    end

    private

end
