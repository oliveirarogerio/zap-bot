import { Client, Message } from "@open-wa/wa-automate";
import fs from "fs";

export async function jaoPimpao(client: Client, message: Message) {
  if (message?.body?.startsWith("!joao")) {
    const n = Number(message.body.substring(6));
    // for (let i = 0; i < n && i < 10; i++) {
    await client.sendText(
      message.chatId,
      "João Gordo Nojento !\n\n para de spam tchesco otarios"
    );
    // }
  }
}
export async function calabocaPalestrinha(client: Client, message: Message) {
  if (message?.body?.startsWith("!calaboca")) {
    const n = Number(message.body.substring(10));
    for (let i = 0; i < n && i < 100; i++) {
      await client.sendText(message.chatId, "Calaboca Palestrinha !");
    }
  }
}

export async function paixaoGod(client: Client, message: Message) {
  if (message?.body?.startsWith("!paixao")) {
    fs.readFile("paixaogod.webp", { encoding: "base64" }, async (err, data) => {
      if (err) throw err;
      const image = data.toString();
      await client.sendImageAsSticker(message.chatId, image);
    });
  }
}
