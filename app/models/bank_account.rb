class BankAccount < ApplicationRecord
    belongs_to :user
    has_many :expenses, dependent: :destroy
    has_many :earnings, dependent: :destroy
end
