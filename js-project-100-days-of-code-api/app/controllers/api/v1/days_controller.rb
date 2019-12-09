class Api::V1::DaysController < ApplicationController
    def index
        @days = Day.all
    end

    def show
        @day = Day.find(day_params[:id])
    end

    def create
        @day = Day.new(day_params)
        if @day.save
            #render some JSON here
        else
            #throw some error here
        end
    end

    def update
        @day = Day.find(day_params[:id])
        if @day.update(day_params)
            #render some JSON here
        else
            #throw some error here
        end
    end

    def destroy
    end

    private

    def day_params
        params.require(:day).permit(:id, :date)
    end

end
