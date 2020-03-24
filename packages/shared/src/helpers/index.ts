import StorageToken from '../storage/StorageToken';

export const isLoggedIn = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        new StorageToken().fetch()
            .then((res: string | null) => {
                if (res !== null) {
                    resolve(true);

                } else {
                    resolve(false);
                }

            })
            .catch((err: unknown) => reject(err));
    });
};

export const formatMoney = (value: number) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatPounds = (amount: number) => {
    return '£' + formatMoney(amount);
};

export const formatPercents = (amount: number) => {
    return '%' + amount;
};

export const shortenString = (string: string, length: number = 30) => {
    if (string.length > length) {
        return string.slice(0, length) + '...';
    }

    return string;
};
