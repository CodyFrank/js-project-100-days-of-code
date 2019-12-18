class DaysSerializer
    def initialize(day_object)
        @day = day_object
    end

    def to_serialized_json
        @day.to_json(:include => {:challenges => {:except => [:created_at, :updated_at]}}, :except => [:created_at, :updated_at])
    end
end