class Challenge < ApplicationRecord
    belongs_to :day
    validate :integer_must_be_1_or_2

    def integer_must_be_1_or_2
        if rating < 1 || rating > 2
            errors.add(:rating, "rating must be 1 or 2")
        end 
    end
end
