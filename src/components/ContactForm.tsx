
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", data);
    reset();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[rgba(255,255,255,0.06)] rounded-[25px] p-6 w-full max-w-md mx-auto"
    >
      <h3 className="text-[#4BCDE7] text-2xl font-semibold mb-4">Contact Us</h3>

      <div className="mb-4">
        <label htmlFor="name" className="block text-white mb-1">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          className="w-full p-2 rounded bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.2)]"
        />
        {errors.name && (
          <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full p-2 rounded bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.2)]"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="company" className="block text-white mb-1">
          Company (Optional)
        </label>
        <input
          id="company"
          {...register("company")}
          className="w-full p-2 rounded bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.2)]"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-white mb-1">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows={4}
          className="w-full p-2 rounded bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.2)]"
        ></textarea>
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button> */}
    </form>
  );
};

export default ContactForm;
