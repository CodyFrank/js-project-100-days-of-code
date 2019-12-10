class ChangeDayColumnDateToStringDatatype < ActiveRecord::Migration[6.0]
  def change
    change_column :days, :date, :string
  end
end
