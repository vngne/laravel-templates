import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { ClipboardCheck, ShieldCheck, UserRoundCog } from "lucide-react";

  const features = [
    {
      icon: <ClipboardCheck className="w-10 h-10" />,
      title: "Dashboard & CRUD",
      description:
        "Manage data effortlessly with a user-friendly interface and flexible CRUD features for various needs.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Secure Authentication",
      description:
        "Login and registration system powered by Auth.js, ensuring reliable session management.",
    },
    {
      icon: <UserRoundCog className="w-10 h-10" />,
      title: "User & Post Management",
      description:
        "Handle users and manage content with complete features for adding, editing, and deleting data efficiently.",
    },
  ];

  export default function Features() {
    return (
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="p-2 rounded-full bg-primary-foreground w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  }
