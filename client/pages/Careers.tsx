import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Careers() {
  const { toast } = useToast();
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -ml-40" />

        <div className="mx-auto max-w-screen-xl px-5 md:px-10 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-primary mb-8 hover:bg-primary/15 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              We're Hiring Now
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-8 max-w-2xl">
              Shape the Future of <span className="bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Enterprise Innovation</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-8 max-w-2xl">
              Join a team of passionate innovators tackling complex global challenges. We're building the next generation of intelligent solutions that transform businesses.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#application-form" className="group inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-200 hover:-translate-y-0.5">
                Apply Now
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#benefits" className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800/50 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-slate-100 hover:border-slate-500 hover:bg-slate-700/50 transition-all duration-200">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-5 md:px-10">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Application Form</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
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

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Solve Complex Challenges",
                desc: "Work on meaningful projects that impact global organizations and drive real transformation.",
              },
              {
                title: "Grow Your Skills",
                desc: "Learn from industry experts and stay at the forefront of technology and design innovation.",
              },
              {
                title: "Collaborative Culture",
                desc: "Join a passionate team that values creativity, innovation, and continuous improvement.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
