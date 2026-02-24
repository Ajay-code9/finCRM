import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';

interface RequestDemoDialogProps {
  children: React.ReactNode;
}

export const RequestDemoDialog: React.FC<RequestDemoDialogProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Demo request submitted');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-0 border-none rounded-2xl overflow-hidden shadow-xl">
        <div className="bg-white p-6">
          <DialogHeader className="flex flex-row items-center justify-between mb-4">
            <DialogTitle className="text-2xl font-bold text-slate-900">Request a demo</DialogTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-700">
              <X className="w-5 h-5" />
            </Button>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="text" placeholder="Name" className="h-12 rounded-xl border-slate-200 focus:ring-purple-500/20" />
            <div className="flex gap-2">
              {/* Country Code Selector - Placeholder for now */}
              <div className="w-24 flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700">
                🇮🇳 +91
              </div>
              <Input type="tel" placeholder="Phone" className="flex-1 h-12 rounded-xl border-slate-200 focus:ring-purple-500/20" />
            </div>
            <Input type="email" placeholder="Email" className="h-12 rounded-xl border-slate-200 focus:ring-purple-500/20" />
            <Textarea placeholder="Your message..." className="min-h-[100px] rounded-xl border-slate-200 focus:ring-purple-500/20" />
            
            {/* Anti-Robot Verification - Placeholder for now */}
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center">
                <X className="w-3 h-3" />
              </div>
              Anti-Robot Verification
            </div>
            <Button type="submit" className="w-full bg-slate-200 text-slate-700 hover:bg-slate-300 font-bold rounded-xl py-6 text-base shadow-sm">
              Send
            </Button>
            <p className="text-center text-xs text-slate-500">
              By continuing, I accept the <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
