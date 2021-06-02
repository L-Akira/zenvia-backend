import { ObjectValidator } from '@shared/providers';

export default class RequestChecker {
    private ObjectValidator: ObjectValidator;

    constructor(ObjectValidator: ObjectValidator) {
        this.ObjectValidator = ObjectValidator;
    }

    public async execute(requestBody: any): Promise<boolean> {
        try {
            const { withdraw } = requestBody;

            const isNaturalNumber = await this.ObjectValidator.verifyWithdrawAmount(withdraw);
            const isWithdrawable = withdraw.amount % 10 === 0;

            return isNaturalNumber && isWithdrawable ? true : false;
        } catch (err) {
            return false;
        }
    }
}