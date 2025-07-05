import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Collectible vs Collectable - Which is Correct?",
  description: "Learn the correct spelling between &apos;collectible&apos; and &apos;collectable&apos;. Discover definitions, examples, and usage tips for these commonly confused words.",
};

export default function CollectibleVsCollectablePage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-10">
      {/* Title and subtitle */}
      <div className="text-center space-y-3">
        <h1 className="text-5xl font-extrabold tracking-tight">Collectible or Collectable</h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed bg-gray-50 rounded px-4 py-2 inline-block mx-auto max-w-xl">
          US vs UK spelling: both are correct, but used in different regions and contexts.
        </p>
      </div>

      {/* Correct/Incorrect Cards - Image Style */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <div className="flex-1">
          <Card className="bg-green-50 border border-green-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">🇺🇸</span>
                <span className="text-2xl font-extrabold text-green-800">US SPELLING</span>
              </div>
              <div className="text-3xl font-extrabold text-green-600 mb-2">Collectible</div>
              <div className="text-lg md:text-xl text-gray-700">
                &quot;Collectible&quot; is the standard spelling in American English and is most common for items meant to be collected.
              </div>
            </div>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="bg-blue-50 border border-blue-200 rounded-xl p-6 h-full flex flex-col justify-between shadow-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">🇬🇧</span>
                <span className="text-2xl font-extrabold text-blue-800">UK SPELLING</span>
              </div>
              <div className="text-3xl font-extrabold text-blue-600 mb-2">Collectable</div>
              <div className="text-lg md:text-xl text-gray-700">
                &quot;Collectable&quot; is the standard spelling in British English, but &quot;collectible&quot; is also accepted.
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
              <span className="font-bold">Collectible/Collectable</span> (adjective/noun): (adj) Worth collecting; (n) an item valued and sought by collectors.
            </div>
            <div className="mb-2 font-semibold text-lg md:text-xl">Examples:</div>
            <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
              <li>Rare coins are popular collectibles. (US)</li>
              <li>Rare coins are popular collectables. (UK)</li>
              <li>This antique vase is highly collectible.</li>
            </ul>
          </div>
        </Card>
      </div>

      {/* Synonyms */}
      <div className="space-y-8">
        <Card className="bg-blue-50">
          <div className="p-6">
            <div className="mb-2 font-bold text-2xl">Synonyms</div>
            <div className="font-semibold mb-2 text-lg md:text-xl">Words with similar meanings to &quot;collectible/collectable&quot;:</div>
            <div className="flex flex-col sm:flex-row justify-between gap-12">
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Nouns:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Curio</li>
                  <li>Antique</li>
                  <li>Souvenir</li>
                  <li>Treasure</li>
                  <li>Artifact</li>
                </ul>
              </div>
              <div className="min-w-[220px]">
                <div className="font-semibold text-lg md:text-xl">Related Terms:</div>
                <ul className="list-disc list-inside ml-4 text-lg md:text-xl text-muted-foreground">
                  <li>Memorabilia</li>
                  <li>Relic</li>
                  <li>Keepsake</li>
                  <li>Memento</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Note */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-900 text-lg md:text-xl">
        <strong>Note:</strong> &quot;Collectible&quot; is preferred in American English, especially for items meant to be collected. &quot;Collectable&quot; is more common in British English, but both are understood in both regions.
      </div>

      {/* FAQ Section */}
      <div>
        <div className="text-2xl font-bold mb-4">FAQ&apos;s</div>
        <div className="space-y-3">
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">Is it collectible or collectable?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both are correct: &quot;collectible&quot; (US), &quot;collectable&quot; (UK). &quot;Collectible&quot; is more common for items meant to be collected.</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">How to pronounce collectible/collectable?</div>
              <div className="text-lg md:text-xl text-muted-foreground">Both are pronounced /kəˈlɛktəbəl/ (kuh-LEK-tuh-buhl).</div>
            </div>
          </Card>
          <Card>
            <div className="p-6">
              <div className="font-semibold text-lg md:text-xl mb-1">What does collectible/collectable mean?</div>
              <div className="text-lg md:text-xl text-muted-foreground">An item valued and sought by collectors; worth collecting.</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 