class ChallengeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :question, :solution, :description
  belongs_to :day
end
