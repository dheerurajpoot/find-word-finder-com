import { Metadata } from "next";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Area vs Aria - Which is Correct?",
  description: "Learn the correct spelling between &apos;area&apos; and &apos;aria&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function AreaVsAriaPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Area or Aria</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          Which spelling is correct, Area or Aria, and how to use them properly.
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
              <div className="text-3xl font-extrabold text-red-600 mb-2">Aria</div>
              <div className="text-lg md:text-xl text-gray-700">
                This spelling is incorrect for the meaning of &quot;area.&quot; &quot;Aria&quot; means a musical piece.
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
              <div className="text-3xl font-extrabold text-green-600 mb-2">Area</div>
              <div className="text-lg md:text-xl text-gray-700">
                This is the correct spelling for a region or space. &quot;Area&quot; has &quot;e&quot; not &quot;i&quot;.
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
              <span className="font-bold">Area</span> (noun): A region or part of a space; the extent of a surface; a field of study or activity.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>The dining area is on the second floor.</li>
              <li>This area of research is very interesting.</li>
              <li>The area of the rectangle is length times width.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;area&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Space:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Space</li>
                  <li>Region</li>
                  <li>Zone</li>
                  <li>Section</li>
                  <li>Territory</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Field:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Field</li>
                  <li>Domain</li>
                  <li>Subject</li>
                  <li>Discipline</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Area&quot; is the correct spelling for a region or space. &quot;Aria&quot; is a different word meaning a musical piece for solo voice.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it aria or area?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both are correct words but with different meanings. &quot;Area&quot; means a region or space, while &quot;aria&quot; means a musical piece.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce area?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The correct pronunciation is /ˈeəriə/ (AIR-ee-uh).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does area mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">A region or part of a space; the extent of a surface; a field of study or activity.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the difference between area and aria?</div>
              <div className="text-lg md:text-xl text-muted-foreground">&quot;Area&quot; refers to a physical or conceptual space, while &quot;aria&quot; is a musical term for a solo vocal piece.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can area be used in mathematical contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! &quot;The area of a circle&quot; or &quot;calculate the area&quot; are common mathematical uses.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What are common phrases with area?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Common phrases include: area of expertise, dining area, work area, and metropolitan area.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is area used in geography?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Geographic area, urban area, rural area, and coastal area are common geographic terms.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the plural of area?</div>
              <div className="text-lg md:text-xl text-muted-foreground">The plural is &quot;areas&quot; - meaning multiple regions or spaces.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What&apos;s the origin of area?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Area comes from Latin &quot;area&quot; meaning an open space, threshing floor, or courtyard.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Can area be used in business contexts?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Yes! Service area, market area, coverage area, and business area are common business terms.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 