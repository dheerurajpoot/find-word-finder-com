import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Appointment or Apointment - Which is Correct?",
  description: "Learn the correct spelling between &apos;appointment&apos; and &apos;apointment&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AppointmentVsApointmentPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Appointment or Apointment</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Appointment or Apointment, and how to use them properly.
        </p>
      </div>

      {/* Correct/Incorrect Cards - Image Style */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-red-50 border border-red-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">❌</span>
                <span className="text-2xl font-extrabold text-red-800">INCORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-red-600 mb-2">Apointment</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Apointment&quot; is missing the first &quot;p&quot;.
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="bg-green-50 border border-green-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">✅</span>
                <span className="text-2xl font-extrabold text-green-800">CORRECT</span>
              </div>
              <div className="text-3xl font-extrabold text-green-600 mb-2">Appointment</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Appointment&quot; has double &quot;p&quot;.
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Definition */}
      <div className="space-y-8">
        <Card>
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Definition</div>
            <div className="mb-2 text-lg md:text-xl">
              <span className="font-bold">Appointment</span> (noun): A formal arrangement to meet someone at a particular time; the act of appointing someone to a position; a job or position.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>I have a doctor&apos;s appointment at 2 PM.</li>
              <li>The appointment of the new CEO was announced yesterday.</li>
              <li>She received an appointment as ambassador.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;appointment&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Meeting:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Meeting</li>
                  <li>Session</li>
                  <li>Consultation</li>
                  <li>Interview</li>
                  <li>Conference</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Position:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Position</li>
                  <li>Job</li>
                  <li>Role</li>
                  <li>Assignment</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Appointment&quot; is the correct spelling. &quot;Apointment&quot; is incorrect—remember the double &quot;p&quot; at the beginning.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it apointment or appointment?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct spelling is &quot;appointment.&quot; &quot;Apointment&quot; is incorrect—it&apos;s missing the first &quot;p&quot;.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce appointment?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /əˈpɔɪntmənt/ (uh-POINT-muhnt).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does appointment mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A formal arrangement to meet someone at a particular time; the act of appointing someone to a position.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between appointment and meeting?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Appointment&quot; is more formal and often involves professional services, while &quot;meeting&quot; is more general.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appointment be used for job positions?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;She received an appointment as CEO&quot; means she was given the position of CEO.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common types of appointments?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Doctor appointments, job interviews, business meetings, dental appointments, and legal consultations.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is appointment used in medical contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Medical appointments are very common—doctor visits, check-ups, and consultations.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the verb form of appointment?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The verb is &quot;appoint&quot; - meaning to assign someone to a position or arrange a meeting.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of appointment?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Appointment comes from the verb &quot;appoint&quot; which comes from Latin &quot;ad&quot; + &quot;ponere&quot; meaning to place.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can appointment be used in business contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Business appointments, client meetings, and executive appointments are very common.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 