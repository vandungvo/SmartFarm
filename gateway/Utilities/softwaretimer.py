class SoftwareTimer:
    def __init__(self):
        self.start_time = None
        self.interval = None
        self.running = False

    def start(self, interval):
        self.interval = interval
        self.start_time = time.time()
        self.running = True

    def stop(self):
        self.running = False

    def reset(self):
        self.start_time = time.time()

    def is_elapsed(self):
        if not self.running:
            return False
        if time.time() - self.start_time >= self.interval:
            self.reset()  # reset for the next interval
            return True
        return False
