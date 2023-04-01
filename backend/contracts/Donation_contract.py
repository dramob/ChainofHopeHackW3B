import smartpy as sp

class FungibleToken(sp.Contract):
    def __init__(self, totalSupply):
        self.init(
                balanceOf = sp.big_map({sp.address('tz1Qqzi4KX49biRRhsmc1CnRKJNVdjr4iCjR'):totalSupply}),
                totalSupply = totalSupply,
                owner = sp.address('tz1Qqzi4KX49biRRhsmc1CnRKJNVdjr4iCjR')
        )

    @sp.entry_point
    def transfer(self, params):
        sp.verify(self.data.balanceOf[sp.sender] >= params.amount, message="Not enough balance")
        self.update_balance(sp.sender, -params.amount)
        self.update_balance(params.to, params.amount)

    @sp.entry_point
    def mint(self, params):
        sp.verify(sp.sender == self.data.owner, message="Not authorized")
        self.data.totalSupply += params.amount
        self.update_balance(params.to, params.amount)

    @sp.entry_point
    def burn(self, params):
        sp.verify(sp.sender == self.data.owner, message="Not authorized")
        sp.verify(self.data.balanceOf[params.from_]>= params.amount, message="Not enough balance")
        self.data.totalSupply -= params.amount
        self.update_balance(params.from_, -params.amount)

    def update_balance(self, account, amount):
        self.data.balanceOf[account] = self.data.balanceOf.get(account,0) + amount



    @sp.add_test(name="Fungible Token Test")
    def test():
        # Initialize contract with 1000 tokens
        c = FungibleToken(1000)
        admin = sp.test_account("Administrator")


        # Test transfer function
        scenario = sp.test_scenario()
        scenario += c
        scenario.h1("Test transfer function")
        scenario.h2("Initial balances")

        scenario.h2("Transfer 500 tokens from sender to receiver")
        scenario += c.transfer(amount=500, to=sp.address("tz1ZPHX76gkyUzb4F4xNRKYuz9DTmrwaDZoU")).run(sender=admin)
        scenario.h2("Final balances")

