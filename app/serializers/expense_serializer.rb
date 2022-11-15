class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :description, :amount, :bank_account_id, :created_at
end
