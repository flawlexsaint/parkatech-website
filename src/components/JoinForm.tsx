
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "../components/ui/Button";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  experience: z.enum(["none", "1-2", "3-5", "5+"]),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms and conditions" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const JoinForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      experience: "none",
      agreeToTerms: false as unknown as true, // Type assertion to fix the error
    },
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Join form submitted:", data);
    reset();
    alert("Thank you for joining! We'll be in touch soon.");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[rgba(18,33,37,0.8)] rounded-[20px] p-6 w-full max-w-md mx-auto"
    >
      <h3 className="text-[#4BCDE7] text-2xl font-semibold mb-4">
        Join Our Network
      </h3>

      <div className="mb-4">
        <label htmlFor="fullName" className="block text-white mb-1">
          Full Name
        </label>
        <input
          id="fullName"
          {...register("fullName")}
          className="w-full p-2 rounded bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.2)]"
        />
        {errors.fullName && (
          <p className="text-red-400 text-sm mt-1">{errors.fullName.message}</p>
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
        <label htmlFor="phone" className="block text-white mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          {...register("phone")}
          className="w-full p-2 rounded bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.2)]"
        />
        {errors.phone && (
          <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="experience" className="block text-white mb-1">
          Sales Experience
        </label>
        <select
          id="experience"
          {...register("experience")}
          className="w-full p-2 rounded bg-[rgba(255,255,255,0.1)] text-white border border-[rgba(255,255,255,0.2)]"
        >
          <option value="none">No experience</option>
          <option value="1-2">1-2 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5+">5+ years</option>
        </select>
        {errors.experience && (
          <p className="text-red-400 text-sm mt-1">
            {errors.experience.message}
          </p>
        )}
      </div>

      <div className="mb-6">
        <label className="flex items-start text-white">
          <input
            type="checkbox"
            {...register("agreeToTerms")}
            className="mt-1 mr-2"
          />
          <span className="text-sm">
            I agree to the terms and conditions and privacy policy
          </span>
        </label>
        {errors.agreeToTerms && (
          <p className="text-red-400 text-sm mt-1">
            {errors.agreeToTerms.message}
          </p>
        )}
      </div>

      {/* <Button
        variant="secondary"
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Processing..." : "Join Now"}
      </Button> */}
    </form>
  );
};

export default JoinForm;
