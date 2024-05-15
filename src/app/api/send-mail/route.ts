import { object, string } from "yup";
import { sendEmail } from "@/service/email";

const formSchema = object().shape({
  email: string().email().required(),
  subject: string().required(),
  message: string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!formSchema.isValidSync(body)) {
    return new Response("메일 전송에 실패함!", { status: 400 });
  }

  return sendEmail(body)
    .then(() => {
      return new Response(
        JSON.stringify({ message: "메일을 성공적으로 보냈음." }),
        {
          status: 200,
        }
      );
    })
    .catch((error) => {
      console.error(error);
      return new Response(JSON.stringify({ message: "메일 전송에 실패함!" }), {
        status: 500,
      });
    });
}
