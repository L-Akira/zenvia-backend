import * as yup from "yup";

export default class ObjectValidator {
    constructor() {}

    public async verifyWithdrawAmount(withdraw: any): Promise<boolean> {
        const schema = yup.object().shape({
            amount: yup.number().required().positive().integer().required(),
        });

        return await schema.isValid(withdraw);
    }
}
