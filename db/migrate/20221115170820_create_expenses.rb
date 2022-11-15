class CreateExpenses < ActiveRecord::Migration[6.1]
  def change
    create_table :expenses do |t|
      t.string :description
      t.string :amount
      t.integer :bank_account_id
      t.timestamps
    end
  end
end
