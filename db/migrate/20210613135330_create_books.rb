class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :genre
      t.text :description
      t.string :image
      t.date :published
      t.string :publisher

      t.timestamps
    end
  end
end
