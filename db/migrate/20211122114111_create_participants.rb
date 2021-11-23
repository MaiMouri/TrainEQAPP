class CreateParticipants < ActiveRecord::Migration[6.1]
  def change
    create_table :participants do |t|
      t.string :name
      t.references :meeting, null: false, foreign_key: true

      t.timestamps
    end
  end
end
