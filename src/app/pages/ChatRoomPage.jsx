import { useState } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { ZoomControls } from "../components/ZoomControls";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, Send, Paperclip, Image, MapPin, Package } from "lucide-react";

const conversations = [
  { id: 1, user: "Sarah K.", lastMessage: "Is the laptop still available?", time: "5m ago", unread: 2, online: true, avatar: "" },
  { id: 2, user: "John M.", lastMessage: "Can we meet at Bellville campus?", time: "1h ago", unread: 0, online: false, avatar: "" },
  { id: 3, user: "Alice J.", lastMessage: "Thank you!", time: "3h ago", unread: 1, online: true, avatar: "" },
];

const messages = [
  { id: 1, sender: "Sarah K.", message: "Hi! Is the MacBook Pro still available?", time: "10:30 AM", isMe: false },
  { id: 2, sender: "Me", message: "Yes, it's still available! It's in excellent condition.", time: "10:32 AM", isMe: true },
  { id: 3, sender: "Sarah K.", message: "Great! Can you tell me more about its specs?", time: "10:33 AM", isMe: false },
  { id: 4, sender: "Me", message: "Sure! It's a 2020 model, 13-inch, 8GB RAM, 256GB SSD. I have the original charger and box.", time: "10:35 AM", isMe: true },
  { id: 5, sender: "Sarah K.", message: "Perfect! Where can we meet for the exchange?", time: "10:40 AM", isMe: false },
  { id: 6, sender: "Me", message: "I'm usually at North Campus. We can meet at the library or cafeteria.", time: "10:42 AM", isMe: true },
];

export function ChatRoomPage() {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="min-h-screen bg-background/50 backdrop-blur-sm" style={{
      backgroundImage: 'url(/src/imports/Campus.Connect.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      <Header />
      <ZoomControls />
      <div className="container mx-auto px-4 py-8">
        <Link to="/dashboard" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversations List */}
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20 lg:col-span-1">
            <CardHeader className="border-b border-primary/10">
              <CardTitle>Messages</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedChat(conv)}
                    className={`p-4 cursor-pointer hover:bg-muted transition-colors ${
                      selectedChat.id === conv.id ? 'bg-muted' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={conv.avatar} />
                          <AvatarFallback>{conv.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        {conv.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="truncate">{conv.user}</h4>
                          {conv.unread > 0 && (
                            <Badge variant="destructive" className="h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                              {conv.unread}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                        <p className="text-xs text-muted-foreground mt-1">{conv.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="bg-background/95 backdrop-blur-sm border-primary/20 lg:col-span-2 flex flex-col h-[600px]">
            {/* Chat Header */}
            <CardHeader className="border-b border-primary/10 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar>
                      <AvatarImage src={selectedChat.avatar} />
                      <AvatarFallback>{selectedChat.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    {selectedChat.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full" />
                    )}
                  </div>
                  <div>
                    <h3>{selectedChat.user}</h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedChat.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Package className="h-4 w-4 mr-2" />
                    View Item
                  </Button>
                  <Button variant="outline" size="sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    Location
                  </Button>
                </div>
              </div>
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[70%] ${msg.isMe ? 'order-2' : 'order-1'}`}>
                    {!msg.isMe && (
                      <p className="text-xs text-muted-foreground mb-1 ml-1">{msg.sender}</p>
                    )}
                    <div
                      className={`rounded-lg p-3 ${
                        msg.isMe
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 ml-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>

            {/* Input Area */}
            <div className="border-t border-primary/10 p-4 flex-shrink-0">
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Image className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      setNewMessage("");
                    }
                  }}
                  className="flex-1"
                />
                <Button>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
