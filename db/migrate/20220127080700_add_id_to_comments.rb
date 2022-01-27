class AddIdToComments < ActiveRecord::Migration[7.0]
  def change
    add_column :comments, :exercise_id, :integer
  end
end
