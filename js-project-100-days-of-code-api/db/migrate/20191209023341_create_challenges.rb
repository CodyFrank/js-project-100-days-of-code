class CreateChallenges < ActiveRecord::Migration[6.0]
  def change
    create_table :challenges do |t|
      t.text :question
      t.text :solution
      t.text :description
      t.integer :day_id

      t.timestamps
    end
  end
end
