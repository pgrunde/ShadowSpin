class CreateShadow < ActiveRecord::Migration
  def change
    create_table :shadows do |t|
      t.string :name
      t.string :git
      t.string :status
    end
  end
end
