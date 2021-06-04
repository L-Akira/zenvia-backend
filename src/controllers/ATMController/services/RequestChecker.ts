import { ObjectValidator } from "@shared/providers";

export default class RequestChecker {
    private ObjectValidator: ObjectValidator;

    constructor(ObjectValidator: ObjectValidator) {
        this.ObjectValidator = ObjectValidator;
    }

    public async execute(requestQuery: any): Promise<boolean> {
        try {
            const isNaturalNumber = await this.ObjectValidator.verifyWithdrawAmount(requestQuery);
            const isWithdrawable = Number(requestQuery.amount) % 10 === 0;

            return isNaturalNumber && isWithdrawable ? true : false;
        } catch (err) {
            return false;
        }
    }
}