import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Careers() {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    motivation: "",
    ideas: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("position", formData.position);
      formDataToSend.append("motivation", formData.motivation);
      formDataToSend.append("ideas", formData.ideas);
      if (cvFile) {
        formDataToSend.append("cv", cvFile);
      }
      formDataToSend.append("type", "career");

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        toast({
          title: "Application Submitted",
          description: "Thank you for your interest! We'll review your application and get back to you soon.",
        });
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          position: "",
          motivation: "",
          ideas: "",
        });
        setCvFile(null);
      } else {
        toast({
          title: "Error",
          description: "Failed to submit application. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 md:py-28">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -ml-40" />

        <div className="mx-auto max-w-screen-xl px-5 md:px-10 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-sm font-semibold text-primary mb-6 hover:bg-primary/12 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Join Our Team
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
              Build the Future With <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Zero Shift</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-8">
              We're looking for passionate professionals who are excited about solving complex challenges through intelligent design and cutting-edge technology. If you're ready to make an impact, we'd love to hear from you.
            </p>

            <div className="mt-8">
              <a href="#application-form" className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5">
                Start Your Application
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="application-form" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white scroll-mt-24">
        <div className="mx-auto max-w-2xl px-5 md:px-10">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Join Our Team</h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  placeholder="+971 50 123 4567"
                />
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-sm font-semibold text-slate-900 mb-2">
                  Position of Interest <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                  placeholder="e.g., Senior Software Engineer, Product Designer, etc."
                />
              </div>

              {/* CV Upload */}
              <div>
                <label htmlFor="cv" className="block text-sm font-semibold text-slate-900 mb-2">
                  Upload Your CV <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleFileChange}
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90 cursor-pointer"
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              {/* Motivation */}
              <div>
                <label htmlFor="motivation" className="block text-sm font-semibold text-slate-900 mb-2">
                  Why do you want to join Zero Shift? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your interest in Zero Shift, what attracts you to our company, and what you hope to contribute..."
                />
              </div>

              {/* Ideas */}
              <div>
                <label htmlFor="ideas" className="block text-sm font-semibold text-slate-900 mb-2">
                  What ideas do you have? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="ideas"
                  name="ideas"
                  value={formData.ideas}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                  placeholder="Share your ideas, innovations, or projects you'd like to work on. How do you see yourself contributing to our mission?"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-primary/90 text-white font-semibold py-3.5 px-6 rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>

              <p className="text-xs text-slate-500 text-center">
                Your information will be securely processed and used only for recruitment purposes.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-16 bg-slate-50 scroll-mt-24">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Why Join Zero Shift?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Solve Complex Challenges",
                desc: "Work on meaningful projects that impact global organizations and drive real transformation.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              {
                title: "Grow Your Skills",
                desc: "Learn from industry experts and stay at the forefront of technology and design innovation.",
                icon: "M12 6.253v13m0-13C6.596 6.253 2 10.849 2 16.5S6.596 26.75 12 26.75s10-4.597 10-10.25S17.404 6.253 12 6.253z"
              },
              {
                title: "Collaborative Culture",
                desc: "Join a passionate team that values creativity, innovation, and continuous improvement.",
                icon: "M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM4.318 20H3c-1.1 0-2-1-2-2.172A3 3 0 015.172 15h.856m13.728-2h.856a3 3 0 013.856 3.172c0 1.172-.9 2-2 2h-1.318"
              },
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white rounded-3xl p-8 md:p-10 border border-slate-200 hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-7">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
