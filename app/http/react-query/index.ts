import { ContactType } from "@/app/type/contact-type";
import { useMutation } from "@tanstack/react-query";
import { createContactEmail } from "../requests";

const KEYS = {
  CREATE_EMAIL: "CREATE_EMAIL",
};

export function useCreateContactEmailMutation() {
  const {
    mutateAsync: createEmailAsync,
    isPending: isCreatingEmailAsync,
    ...rest
  } = useMutation({
    mutationKey: [KEYS.CREATE_EMAIL],
    mutationFn: (data: ContactType) => createContactEmail(data),
  });

  return {
    createEmailAsync,
    isCreatingEmailAsync,
    ...rest,
  };
}
