import { createContext, useContext, useState } from 'react';
import type { ReactNode, Dispatch, SetStateAction } from 'react';
import type { BankName, Payfrom, Youpay } from '../Stores/Type';
import { payfrom, youpay } from '../Stores/Datas';

type ContextType = {
  selected: Youpay;
  setSelected: Dispatch<SetStateAction<Youpay>>;

  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;

  search: string;
  setSearch: Dispatch<SetStateAction<string>>;

  payfromOpen: boolean;
  setPayfromOpen: Dispatch<SetStateAction<boolean>>;

  selectedPayfrom: Payfrom;
  setSelectedPayfrom: Dispatch<SetStateAction<Payfrom>>;

  selectedBank: BankName | null;
  setSelectedBank: Dispatch<SetStateAction<BankName | null>>;

  bankOpen: boolean;
  setBankOpen: Dispatch<SetStateAction<boolean>>;

   accountNumber: string;
  setAccountNumber: Dispatch<SetStateAction<string>>;

  accountName: string;
  loadingAccountName: boolean;

  handleAccountNumberChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const Context = createContext<ContextType | undefined>(undefined);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<Youpay>(youpay[youpay.length - 1]);
  const [selectedPayfrom, setSelectedPayfrom] = useState<Payfrom>(payfrom[0]);

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const [payfromOpen, setPayfromOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState<BankName | null>(null);
  const [bankOpen, setBankOpen] = useState(false);

  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('');
  const [loadingAccountName, setLoadingAccountName] = useState(false);

  const handleAccountNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value.replace(/\D/g, '');

    if (value.length > 10) return;

    setAccountNumber(value);
    setAccountName('');

    if (value.length === 10) {
      setLoadingAccountName(true);

      setTimeout(() => {
        setAccountName('ODUTUGA GBEKE');
        setLoadingAccountName(false);
      }, 2000);
    }
  };

  return (
    <Context.Provider
      value={{
        selected,
        setSelected,
        open,
        setOpen,
        search,
        setSearch,
        payfromOpen,
        setPayfromOpen,
        selectedPayfrom,
        setSelectedPayfrom,
        selectedBank,
        setSelectedBank,
        bankOpen,
        setBankOpen,
        accountNumber,
        setAccountNumber,
        accountName,
        loadingAccountName,
        handleAccountNumberChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useContextstore = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('useContextstore must be used within Provider');
  }
  return context;
};
