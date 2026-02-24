import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';
import { useRequestDemo } from '@/context/RequestDemoContext';

interface RequestDemoDialogProps {
  children?: React.ReactNode;
}

export const RequestDemoDialog: React.FC<RequestDemoDialogProps> = ({ children }) => {
  const { isDemoDialogOpen, setIsDemoDialogOpen } = useRequestDemo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Demo request submitted');
    setIsDemoDialogOpen(false);
  };

  return (
    <Dialog open={isDemoDialogOpen} onOpenChange={setIsDemoDialogOpen}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[520px] md:max-w-[640px] p-0 border-none rounded-[32px] overflow-hidden shadow-2xl bg-transparent"
      >
        <div className="bg-brand-50">
          {/* Header strip */}
          <div className="h-2 w-full bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500" />

          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6 flex flex-row items-center justify-between">
              <DialogTitle className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                Request a demo
              </DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDemoDialogOpen(false)}
                className="text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </DialogHeader>

            <p className="text-sm md:text-base text-slate-600 mb-6">
              Share your details and our team will reach out with a tailored walkthrough of FinCRM.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-brand-500/30"
                />
                <div className="flex gap-2">
                  {/* Country Code Selector - Placeholder for now */}
                  <button
                    type="button"
                    className="w-28 h-12 flex items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium shadow-sm"
                  >
                    <span className="text-lg">🇮🇳</span>
                    <span className="text-slate-700">+91</span>
                  </button>
                  <Input
                    type="tel"
                    placeholder="Phone"
                    className="flex-1 h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-brand-500/30"
                  />
                </div>
              </div>

              <Input
                type="email"
                placeholder="Email"
                className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-brand-500/30"
              />

              <Textarea
                placeholder="Your message..."
                className="min-h-[110px] rounded-xl border-slate-200 bg-white focus-visible:ring-brand-500/30"
              />

              {/* Anti-Robot Verification - Placeholder for now */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm text-slate-500">
                <div className="h-12 w-full sm:w-[260px] rounded-xl border border-slate-200 bg-white px-4 flex items-center gap-2 shadow-sm">
                  <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center">
                    <X className="w-3 h-3 text-slate-400" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium text-slate-700">Anti-Robot Verification</span>
                    <span className="text-[11px] text-slate-400">Click to start verification</span>
                  </div>
                </div>
                <span className="text-[11px] text-slate-400">
                  Protected by placeholder captcha. Production version can be wired to your provider.
                </span>
              </div>

              <Button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-2xl py-6 text-base shadow-lg shadow-brand-500/30"
              >
                Send
              </Button>

              <p className="text-center text-[11px] text-slate-500 mt-2">
                By continuing, I accept the{" "}
                <a href="#" className="text-brand-600 hover:text-brand-700 hover:underline font-medium">
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
