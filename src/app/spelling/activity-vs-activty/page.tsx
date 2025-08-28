import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Activity or Activty - Which is Correct?",
  description: "Learn the correct spelling between &apos;activity&apos; and &apos;activty&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function ActivityVsActivtyPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Activity or Activty</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Activity or Activty, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Activty</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect. &quot;Activty&quot; is not a valid word in English.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Activity</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling. &quot;Activity&quot; is a noun meaning something that a person or group does.
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
              <span className="font-bold">Activity</span> (noun): A thing that a person or group does or has done; an action or task.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Physical activity is important for health.</li>
              <li>The children enjoyed the outdoor activities.</li>
              <li>There was a lot of activity in the office today.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;activity&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Task</li>
                  <li>Action</li>
                  <li>Exercise</li>
                  <li>Event</li>
                  <li>Pursuit</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Hobby</li>
                  <li>Pastime</li>
                  <li>Occupation</li>
                  <li>Engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Activity&quot; is the correct spelling. &quot;Activty&quot; is a common misspelling—remember, it has an &quot;i&quot; before the &quot;t&quot;.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it activty or activity?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct word is &quot;activity.&quot; &quot;Activty&quot; is a common misspelling.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce activity?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ækˈtɪvɪti/ (ak-TIV-uh-tee).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does activity mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A thing that a person or group does or has done; an action or task.</div>
            </div>
          </Card>
        </div>
      </div>

      {/* Three Column Layout */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {/* Featured Misspellings */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Featured Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/anyone-vs-anyone" className="text-blue-700 hover:text-blue-900 underline">Anyone vs Anyone</a></li>
            <li><a href="/spelling/anything-vs-anything" className="text-blue-700 hover:text-blue-900 underline">Anything vs Anything</a></li>
            <li><a href="/spelling/anywhere-vs-anywhere" className="text-blue-700 hover:text-blue-900 underline">Anywhere vs Anywhere</a></li>
            <li><a href="/spelling/appear-vs-appear" className="text-blue-700 hover:text-blue-900 underline">Appear vs Appear</a></li>
            <li><a href="/spelling/apple-vs-apple" className="text-blue-700 hover:text-blue-900 underline">Apple vs Apple</a></li>
          </ul>
        </div>

        {/* Related Misspellings */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-bold mb-4 text-purple-900">Related Misspellings</h3>
          <ul className="space-y-2">
            <li><a href="/spelling/task-vs-task" className="text-purple-700 hover:text-purple-900 underline">Task vs Task</a></li>
            <li><a href="/spelling/action-vs-actoin" className="text-purple-700 hover:text-purple-900 underline">Action vs Actoin</a></li>
            <li><a href="/spelling/exercise-vs-exercise" className="text-purple-700 hover:text-purple-900 underline">Exercise vs Exercise</a></li>
            <li><a href="/spelling/event-vs-event" className="text-purple-700 hover:text-purple-900 underline">Event vs Event</a></li>
            <li><a href="/spelling/pursuit-vs-pursuit" className="text-purple-700 hover:text-purple-900 underline">Pursuit vs Pursuit</a></li>
          </ul>
        </div>

        {/* Learned Grammar */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-4 text-green-900">Learned Grammar</h3>
          <ul className="space-y-2">
            <li><a href="/grammar/nouns" className="text-green-700 hover:text-green-900 underline">Nouns Guide</a></li>
            <li><a href="/grammar/suffixes" className="text-green-700 hover:text-green-900 underline">Suffixes</a></li>
            <li><a href="/grammar/spelling-rules" className="text-green-700 hover:text-green-900 underline">Spelling Rules</a></li>
            <li><a href="/grammar/etymology" className="text-green-700 hover:text-green-900 underline">Etymology</a></li>
            <li><a href="/grammar/common-mistakes" className="text-green-700 hover:text-green-900 underline">Common Mistakes</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 