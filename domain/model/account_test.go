package model_test

import (
	"testing"

	uuid "github.com/satori/go.uuid"

	"github.com/stretchr/testify/require"
	"github.com/williamasjr/code-pix-go/domain/model"
)

func TestModel_NewAccount(t *testing.T) {
	code := "001"
	name := "Banco do Brasil"
	bank, err := model.NewBank(code, name)

	accountNumber := "abcnumber"
	ownerName := "Wesley"
	account, err := model.NewAccount(bank, accountNumber, ownerName)

	require.Nil(t, err)
	require.NotEmpty(t, uuid.FromStringOrNil(account.ID))
	require.Equal(t, account.Number, accountNumber)
	// require.Equal(t, account.BankID, bank.ID) error no "bankID"

	_, err = model.NewAccount(bank, "", ownerName)
	require.NotNil(t, err)
}
