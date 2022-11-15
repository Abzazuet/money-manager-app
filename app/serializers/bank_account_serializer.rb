class BankAccountSerializer < ActiveModel::Serializer
  attributes :id, :name, :balance, :currency, :user_id
end
