class AddRatingToChallenges < ActiveRecord::Migration[6.0]
  def change
    add_column :challenges, :rating, :string
  end
end
