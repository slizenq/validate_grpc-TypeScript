import { ValueObject } from "./ValueObject";

interface IPortfolio {
    value: string;
}

class Portfolio extends ValueObject<IPortfolio> {
    private constructor(props: IPortfolio) {
        super(props);
    }

    public static create(portfolio: string): Portfolio {
        // const pattern = new RegExp("https?://S+.S+");

        // if (!pattern.test(portfolio)) {
        //     throw new Error("Вы ввели не ссылку");
        // } else {
        //     return new Portfolio({ value: portfolio });
        // }

        const phoneRegex =
            /https?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/;


        if (portfolio.length == 0) {
            return new Portfolio({ value: portfolio });
        } else {
        if (!portfolio.match(phoneRegex)) {
            throw new Error("Некорректный формат ссылки");
        } else {
            return new Portfolio({ value: portfolio });
        }
    }
    }
}

export { Portfolio };
