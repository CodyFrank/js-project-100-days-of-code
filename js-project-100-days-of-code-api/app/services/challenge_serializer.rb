class ChallengeSerializer
    def initialize(challenge_object)
        @challenge = challenge_object
    end

    def to_serialized_json
        options = {
            include: {
                day: {
                    except: [:created_at, :updated_at]
                    }},
                     except: [:created_at, :updated_at]
                    }

        @challenge.to_json(options)
    end

end