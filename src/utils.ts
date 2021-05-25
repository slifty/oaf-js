import { Message } from "discord.js";
import { DiscordClient } from "./discord";

export function attachUtils(client: DiscordClient) {
    client.addCommand("8ball", eightBall);
}

function eightBall(message: Message): void {
    message.channel.send(eightBallRolls[Math.floor(Math.random() * eightBallRolls.length)])
}

const eightBallRolls = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "If CDM has a free moment, sure.",
    "Why not?",
    "How am I meant to know?",
    "I guess???",
    "...you realise that this is just a random choice from a list of strings, right?",
    "I have literally no way to tell.",
    "Ping Bobson, he probably knows",
    "Check the wiki, answer's probably in there somewhere.",
    "The wiki has the answer.",
    "The wiki has the answer, but it's wrong.",
    "I've not finished spading the answer to that question yet.",
    "The devs know, go pester them instead of me.",
    "INSUFFICIENT DATA FOR MEANINGFUL ANSWER",
    "THERE IS AS YET INSUFFICIENT DATA FOR A MEANINGFUL ANSWER"
];
