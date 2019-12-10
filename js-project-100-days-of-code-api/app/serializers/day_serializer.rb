class DaySerializer
  include FastJsonapi::ObjectSerializer
  attributes :date
  has_many :challenges
end
