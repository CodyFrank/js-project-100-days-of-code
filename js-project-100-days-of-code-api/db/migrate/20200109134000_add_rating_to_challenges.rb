class AddRatingToChallenges < ActiveRecord::Migration[6.0]
  def change
    add_column :challenges, :rating, :integer, limit: 1
  end
end
