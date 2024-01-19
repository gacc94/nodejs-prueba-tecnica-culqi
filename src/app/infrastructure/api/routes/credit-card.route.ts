import { Router } from "express";
import { creditCardController } from "../controllers/credit-card.controller";
import { creditCardValidator } from "../middlewares/creditcard-validator.middleware";
import { getCardType } from "../middlewares/getcard-type.middleware";
import { pkValidator } from "../middlewares/pk-validator.middleware";
export const router = Router();

router.get("/getTokens", creditCardController.getTokens.bind(creditCardController));
router.post("/sign", getCardType, creditCardValidator(), creditCardController.tokenizate.bind(creditCardController));
router.post("/verify", pkValidator, creditCardController.getCreditCard.bind(creditCardController));

// El uso más simple de bind() es hacer que una función que, sin importar cómo es llamada, siempre apunte al mismo objeto con la referencia this.
