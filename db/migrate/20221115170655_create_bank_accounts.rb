class CreateBankAccounts < ActiveRecord::Migration[6.1]
  def change
    create_table :bank_accounts do |t|
      t.string :name
      t.string :balance
      t.string :currency
      t.integer :user_id
      t.timestamps
    end
  end
end
